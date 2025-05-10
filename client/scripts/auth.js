import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
  } from './firebase.js';
  
  // Sign Up
  document.getElementById('signup-form')?.addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      window.location.href = "login.html";
    } catch (error) {
      alert(error.message);
    }
  });
  
  // Login
  document.getElementById('login-form')?.addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      window.location.href = "symptoms.html";
    } catch (error) {
      alert(error.message);
    }
  });