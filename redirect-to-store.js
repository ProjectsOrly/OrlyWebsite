const userAgent = navigator.userAgent || navigator.vendor || window.opera;

// Check if the user agent indicates an Android device
if (/android/i.test(userAgent)) {
  window.location.href = 'https://play.google.com/store/apps/details?id=com.orlyapp';
}
// Check if the user agent indicates an iPhone device
else if (/iPhone/.test(userAgent) || userAgent.indexOf('iPad') !== -1 || userAgent.indexOf('iPod') !== -1) {
  window.location.href = 'https://apps.apple.com/us/app/orly/id6446028123';
}
// Check if the user agent indicates a Windows device
else if (/Windows/i.test(userAgent)) {
  window.location.href = 'https://play.google.com/store/apps/details?id=com.orlyapp';
}
// Check if the user agent indicates a Mac device
else if (/Mac/i.test(userAgent)) {
  window.location.href = 'https://apps.apple.com/us/app/orly/id6446028123';
}
// Default redirection in case the device type is unknown or unsupported
else {
  // Redirect to a fallback URL or display an error message
  window.location.href = 'https://play.google.com/store/apps/details?id=com.orlyapp';
}
