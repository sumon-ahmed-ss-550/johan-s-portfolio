/**
 * Portfolio & Resume Interactive Scripts
 * Candidate: Mejbahul Hassan (Johan)
 */

/**
 * Generate a clean dynamic filename starting with Year, Month, Date, and Day
 * Example format: "2026-11-25_Wed_Mejbahul_Hassan_Resume.pdf"
 */
function generateDynamicFilename() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = days[now.getDay()];
  return `${year}-${month}-${date}_${day}_Mejbahul_Hassan_Resume.pdf`;
}

/**
 * Trigger direct download of johan.pdf with timestamped filename
 */
function downloadDynamicPDF() {
  const filename = generateDynamicFilename();
  const a = document.createElement('a');
  a.href = 'johan.pdf';
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * Trigger native print dialog with timestamped title (for Save As PDF)
 */
function printCV() {
  const originalTitle = document.title;
  const filename = generateDynamicFilename().replace('.pdf', '');
  document.title = filename;
  window.print();
  // Restore document title after print dialog closes
  setTimeout(() => {
    document.title = originalTitle;
  }, 2000);
}

/**
 * Initialize on DOM Content Loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  // Update filename display indicator in toolbar
  const displayElem = document.getElementById('displayFilenameText');
  if (displayElem) {
    displayElem.textContent = generateDynamicFilename();
  }

  // Update dynamic copyright year in footer
  const yearElem = document.getElementById('currentYear');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
});
