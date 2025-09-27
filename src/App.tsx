@@ .. @@
 import JobSimulation from './dashboard/pages/JobSimulation';
 import FeaturePlaceholder from './dashboard/pages/FeaturePlaceholder';
 import AutoCV from './dashboard/pages/AutoCV';
+import Settings from './dashboard/pages/Settings';
+import Profile from './dashboard/pages/Profile';

 function HomePage() {
@@ .. @@
           <Route path="escrow-contract" element={<FeaturePlaceholder title="Kontrak Escrow" />} />
           <Route path="impact-dashboard" element={<FeaturePlaceholder title="Dasbor Dampak" />} />
           <Route path="portfolio" element={<FeaturePlaceholder title="Portofolio" />} />
           <Route path="skill-snapshot" element={<FeaturePlaceholder title="Ringkasan Skill" />} />
+          <Route path="settings" element={<Settings />} />
+          <Route path="profile" element={<Profile />} />
         </Route>
       </Routes>
     </AnimatePresence>