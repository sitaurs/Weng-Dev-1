@@ .. @@
 import React from 'react';
-import { Link, NavLink } from 'react-router-dom';
-import { Bell, Settings, User } from 'lucide-react';
+import { Link, NavLink, useNavigate } from 'react-router-dom';
+import { Bell, Settings, User, LogOut, UserCircle } from 'lucide-react';
+import { useState, useRef, useEffect } from 'react';

 const DashboardHeader: React.FC = () => {
+  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
+  const profileMenuRef = useRef<HTMLDivElement>(null);
+  const navigate = useNavigate();
+
+  // Close profile menu when clicking outside
+  useEffect(() => {
+    const handleClickOutside = (event: MouseEvent) => {
+      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
+        setIsProfileMenuOpen(false);
+      }
+    };
+
+    document.addEventListener('mousedown', handleClickOutside);
+    return () => document.removeEventListener('mousedown', handleClickOutside);
+  }, []);
+
+  const handleLogout = () => {
+    // TODO: Implement actual logout logic
+    navigate('/');
+  };
+
   return (
     <header className="bg-white border-b border-gray-200 px-6 py-4">
       <div className="flex items-center justify-between">
         <div className="flex items-center space-x-8">
           <Link to="/dashboard" className="flex items-center space-x-2">
-            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
-              <span className="text-white font-bold text-sm">S</span>
+            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
+              <span className="text-white font-bold text-sm">JH</span>
             </div>
-            <span className="text-xl font-semibold text-gray-900">SimHire</span>
+            <span className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">JobHub</span>
           </Link>
           <nav className="flex items-center space-x-4">
             <NavLink to="/dashboard" end className={({isActive})=>`px-3 py-2 rounded-lg font-medium ${isActive? 'bg-gray-100 text-gray-900':'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}>Beranda</NavLink>
@@ .. @@
         </div>
-        <div className="flex items-center space-x-3">
-          <button className="p-2 text-gray-600 hover:text-gray-900"><Settings size={20} /></button>
-          <button className="p-2 text-gray-600 hover:text-gray-900"><Bell size={20} /></button>
-          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
-            <User size={16} className="text-white" />
+        <div className="flex items-center space-x-3 relative">
+          <Link to="/dashboard/settings" className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
+            <Settings size={20} />
+          </Link>
+          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
+            <Bell size={20} />
+          </button>
+          
+          {/* Profile Dropdown */}
+          <div className="relative" ref={profileMenuRef}>
+            <button
+              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
+              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
+            >
+              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-sm">
+                <span className="text-white font-bold text-sm">AP</span>
+              </div>
+              <div className="hidden md:block text-left">
+                <div className="text-sm font-medium text-gray-900">Alexandria Putri</div>
+                <div className="text-xs text-gray-500">Product Designer</div>
+              </div>
+            </button>
+
+            {/* Dropdown Menu */}
+            {isProfileMenuOpen && (
+              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
+                <div className="px-4 py-3 border-b border-gray-100">
+                  <div className="flex items-center space-x-3">
+                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
+                      <span className="text-white font-bold">AP</span>
+                    </div>
+                    <div>
+                      <div className="font-medium text-gray-900">Alexandria Putri</div>
+                      <div className="text-sm text-gray-500">alex@example.com</div>
+                    </div>
+                  </div>
+                </div>
+                
+                <div className="py-2">
+                  <Link
+                    to="/dashboard/profile"
+                    onClick={() => setIsProfileMenuOpen(false)}
+                    className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
+                  >
+                    <UserCircle size={18} />
+                    <span>Lihat Profil</span>
+                  </Link>
+                  <Link
+                    to="/dashboard/settings"
+                    onClick={() => setIsProfileMenuOpen(false)}
+                    className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
+                  >
+                    <Settings size={18} />
+                    <span>Pengaturan</span>
+                  </Link>
+                </div>
+                
+                <div className="border-t border-gray-100 py-2">
+                  <button
+                    onClick={handleLogout}
+                    className="flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors w-full text-left"
+                  >
+                    <LogOut size={18} />
+                    <span>Keluar</span>
+                  </button>
+                </div>
+              </div>
+            )}
           </div>
         </div>
       </div>