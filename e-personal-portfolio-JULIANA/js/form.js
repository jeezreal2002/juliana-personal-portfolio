// ===================================
// FORM.JS - Contact Form Validation & Submission
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
});

// ===================================
// Contact Form Initialization
// ===================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Real-time validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        if (nameInput) {
            nameInput.addEventListener('blur', () => validateName(nameInput.value));
            nameInput.addEventListener('input', () => clearError('name'));
        }
        
        if (emailInput) {
            emailInput.addEventListener('blur', () => validateEmail(emailInput.value));
            emailInput.addEventListener('input', () => clearError('email'));
        }
        
        if (messageInput) {
            messageInput.addEventListener('blur', () => validateMessage(messageInput.value));
            messageInput.addEventListener('input', () => clearError('message'));
        }
    }
}

// ===================================
// Form Submission Handler
// ===================================
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate all fields
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isMessageValid = validateMessage(message);
    
    // If all validations pass
    if (isNameValid && isEmailValid && isMessageValid) {
        // Show loading state
        const submitButton = document.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual backend call)
        setTimeout(() => {
            // Show success message
            showFormMessage('success', 'Thank you for your message! I will get back to you soon.');
            
            // Reset form
            document.getElementById('contactForm').reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(() => {
                hideFormMessage();
            }, 5000);
        }, 1500);
        
        // For actual implementation, use this structure:
        /*
        fetch('your-backend-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => response.json())
        .then(data => {
            showFormMessage('success', 'Thank you for your message! I will get back to you soon.');
            document.getElementById('contactForm').reset();
        })
        .catch(error => {
            showFormMessage('error', 'Oops! Something went wrong. Please try again.');
        })
        .finally(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
        */
    }
}

// ===================================
// Validation Functions
// ===================================

function validateName(name) {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    
    if (name.length === 0) {
        showError(nameInput, nameError, 'Name is required');
        return false;
    }
    
    if (name.length < 2) {
        showError(nameInput, nameError, 'Name must be at least 2 characters');
        return false;
    }
    
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        showError(nameInput, nameError, 'Name can only contain letters and spaces');
        return false;
    }
    
    clearError('name');
    return true;
}

function validateEmail(email) {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    
    if (email.length === 0) {
        showError(emailInput, emailError, 'Email is required');
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
        return false;
    }
    
    clearError('email');
    return true;
}

function validateMessage(message) {
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    
    if (message.length === 0) {
        showError(messageInput, messageError, 'Message is required');
        return false;
    }
    
    if (message.length < 10) {
        showError(messageInput, messageError, 'Message must be at least 10 characters');
        return false;
    }
    
    clearError('message');
    return true;
}

// ===================================
// Error Display Functions
// ===================================

function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearError(fieldName) {
    const input = document.getElementById(fieldName);
    const errorElement = document.getElementById(fieldName + 'Error');
    
    if (input) {
        input.classList.remove('error');
    }
    
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

// ===================================
// Form Message Functions
// ===================================

function showFormMessage(type, message) {
    const formMessage = document.getElementById('formMessage');
    
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
        formMessage.style.display = 'block';
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function hideFormMessage() {
    const formMessage = document.getElementById('formMessage');
    
    if (formMessage) {
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';
    }
}
