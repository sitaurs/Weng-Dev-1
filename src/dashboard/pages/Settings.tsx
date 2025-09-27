import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Lock, Bell, Shield, Globe, Save, Camera, Eye, EyeOff } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'account' | 'notifications' | 'privacy'>('profile');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error' | 'info'; message: string; visible: boolean }>({ type: 'info', message: '', visible: false });

  // Form states
  const [profileData, setProfileData] = useState({
    name: 'Alexandria Putri',
    email: 'alex@example.com',
    phone: '+62 812 3456 7890',
    location: 'Jakarta, Indonesia',
    bio: 'Product Designer dengan 4+ tahun pengalaman di fintech dan edtech',
    website: 'https://alexandria.dev',
    linkedin: 'https://linkedin.com/in/alexandria-putri'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    jobAlerts: true,
    marketingEmails: false,
    weeklyDigest: true
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    allowMessages: true,
    dataSharing: false
  });

  const showToast = (type: 'success' | 'error' | 'info', message: string) => {
    setToast({ type, message, visible: true });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 3000);
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);
    // Simulasi API call
    setTimeout(() => {
      setIsLoading(false);
      showToast('success', 'Profil berhasil diperbarui');
    }, 1000);
  };

  const handleChangePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      showToast('error', 'Password baru dan konfirmasi tidak cocok');
      return;
    }
    if (passwordData.newPassword.length < 8) {
      showToast('error', 'Password minimal 8 karakter');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      showToast('success', 'Password berhasil diubah');
    }, 1000);
  };

  const handleSaveNotifications = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      showToast('success', 'Pengaturan notifikasi berhasil disimpan');
    }, 800);
  };

  const handleSavePrivacy = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      showToast('success', 'Pengaturan privasi berhasil disimpan');
    }, 800);
  };

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'account', label: 'Akun', icon: Shield },
    { id: 'notifications', label: 'Notifikasi', icon: Bell },
    { id: 'privacy', label: 'Privasi', icon: Lock }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Toast */}
      {toast.visible && (
        <div className={`fixed top-6 right-6 z-50 px-4 py-3 rounded-lg shadow-lg text-white ${
          toast.type === 'error' ? 'bg-red-600' : 
          toast.type === 'success' ? 'bg-green-600' : 'bg-blue-600'
        }`}>
          {toast.message}
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pengaturan</h1>
          <p className="text-gray-600">Kelola akun dan preferensi Anda</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon size={20} />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {activeTab === 'profile' && (
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        AP
                      </div>
                      <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50">
                        <Camera size={16} className="text-gray-600" />
                      </button>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">Informasi Profil</h2>
                      <p className="text-gray-600">Perbarui foto dan informasi pribadi Anda</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          value={profileData.name}
                          onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telepon</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Lokasi</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          value={profileData.location}
                          onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                      <textarea
                        value={profileData.bio}
                        onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Ceritakan sedikit tentang diri Anda..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="url"
                          value={profileData.website}
                          onChange={(e) => setProfileData(prev => ({ ...prev, website: e.target.value }))}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                      <input
                        type="url"
                        value={profileData.linkedin}
                        onChange={(e) => setProfileData(prev => ({ ...prev, linkedin: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <button
                      onClick={handleSaveProfile}
                      disabled={isLoading}
                      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <Save size={18} />
                      {isLoading ? 'Menyimpan...' : 'Simpan Perubahan'}
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'account' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Keamanan Akun</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password Saat Ini</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type={showCurrentPassword ? 'text' : 'password'}
                          value={passwordData.currentPassword}
                          onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password Baru</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type={showNewPassword ? 'text' : 'password'}
                          value={passwordData.newPassword}
                          onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Konfirmasi Password Baru</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={passwordData.confirmPassword}
                          onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handleChangePassword}
                        disabled={isLoading}
                        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        <Save size={18} />
                        {isLoading ? 'Mengubah...' : 'Ubah Password'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Pengaturan Notifikasi</h2>
                  
                  <div className="space-y-6">
                    {Object.entries(notificationSettings).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {key === 'emailNotifications' && 'Notifikasi Email'}
                            {key === 'pushNotifications' && 'Notifikasi Push'}
                            {key === 'jobAlerts' && 'Alert Pekerjaan'}
                            {key === 'marketingEmails' && 'Email Marketing'}
                            {key === 'weeklyDigest' && 'Ringkasan Mingguan'}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {key === 'emailNotifications' && 'Terima notifikasi melalui email'}
                            {key === 'pushNotifications' && 'Terima notifikasi push di browser'}
                            {key === 'jobAlerts' && 'Notifikasi pekerjaan baru yang sesuai'}
                            {key === 'marketingEmails' && 'Email promosi dan penawaran khusus'}
                            {key === 'weeklyDigest' && 'Ringkasan aktivitas mingguan'}
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={(e) => setNotificationSettings(prev => ({ ...prev, [key]: e.target.checked }))}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                    ))}

                    <div className="flex justify-end mt-6">
                      <button
                        onClick={handleSaveNotifications}
                        disabled={isLoading}
                        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        <Save size={18} />
                        {isLoading ? 'Menyimpan...' : 'Simpan Pengaturan'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Pengaturan Privasi</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Visibilitas Profil</label>
                      <select
                        value={privacySettings.profileVisibility}
                        onChange={(e) => setPrivacySettings(prev => ({ ...prev, profileVisibility: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="public">Publik - Dapat dilihat semua orang</option>
                        <option value="private">Privat - Hanya Anda yang dapat melihat</option>
                        <option value="connections">Koneksi - Hanya koneksi yang dapat melihat</option>
                      </select>
                    </div>

                    {['showEmail', 'showPhone', 'allowMessages', 'dataSharing'].map((key) => (
                      <div key={key} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {key === 'showEmail' && 'Tampilkan Email'}
                            {key === 'showPhone' && 'Tampilkan Telepon'}
                            {key === 'allowMessages' && 'Izinkan Pesan'}
                            {key === 'dataSharing' && 'Berbagi Data'}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {key === 'showEmail' && 'Email Anda akan terlihat di profil publik'}
                            {key === 'showPhone' && 'Nomor telepon akan terlihat di profil publik'}
                            {key === 'allowMessages' && 'Izinkan orang lain mengirim pesan kepada Anda'}
                            {key === 'dataSharing' && 'Izinkan berbagi data untuk meningkatkan layanan'}
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={privacySettings[key as keyof typeof privacySettings] as boolean}
                            onChange={(e) => setPrivacySettings(prev => ({ ...prev, [key]: e.target.checked }))}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                    ))}

                    <div className="flex justify-end mt-6">
                      <button
                        onClick={handleSavePrivacy}
                        disabled={isLoading}
                        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        <Save size={18} />
                        {isLoading ? 'Menyimpan...' : 'Simpan Pengaturan'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;