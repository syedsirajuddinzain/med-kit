import { auth, onAuthStateChanged } from './firebase.js';

onAuthStateChanged(auth, (user) => {
  const protectedPages = ['symptoms.html', 'remedy.html', 'precautions.html', 'about.html'];
  const authPages = ['login.html', 'signup.html'];
  const currentPage = window.location.pathname.split('/').pop();

  // If user is NOT logged in and tries to access protected page
  if (!user && protectedPages.includes(currentPage)) {
    alert("Please log in first.");
    window.location.href = "login.html";
  }

  // If user IS logged in and tries to access login/signup
  if (user && authPages.includes(currentPage)) {
    window.location.href = "symptoms.html";
  }
});