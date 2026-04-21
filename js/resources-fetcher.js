// Script to dynamically fetch and display mental health resources using Firecrawl API
// This script enhances the Break the Silence website with real-time mental health information

document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch mental health resources from various sources
    async function fetchMentalHealthResources() {
        // This is a placeholder for actual API calls to Firecrawl
        // In a production environment, you would make actual requests to fetch current data
        
        console.log("Fetching updated mental health resources...");
        
        // Simulated data that would normally come from API calls
        const simulatedResources = [
            {
                title: "Youth Mental Health Resources in Kenya",
                description: "Comprehensive guide to mental health support services specifically for young people in Kenya",
                link: "#",
                category: "Local Support"
            },
            {
                title: "Coping Strategies for Anxiety",
                description: "Evidence-based techniques to manage anxiety and stress in daily life",
                link: "#",
                category: "Therapeutic Resources"
            },
            {
                title: "Peer Support Groups in Kiambu",
                description: "Connect with others who understand your journey in local support groups",
                link: "#",
                category: "Community Support"
            }
        ];
        
        displayResources(simulatedResources);
    }
    
    // Function to display resources on the page
    function displayResources(resources) {
        const resourcesContainer = document.getElementById('dynamic-resources');
        if (!resourcesContainer) return;
        
        let resourcesHTML = '';
        
        resources.forEach(resource => {
            resourcesHTML += `
                <div class="bg-white p-6 rounded-xl shadow-md mb-4">
                    <div class="flex justify-between items-start">
                        <div>
                            <span class="inline-block px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full mb-2">${resource.category}</span>
                            <h3 class="font-bold text-lg text-gray-800">${resource.title}</h3>
                            <p class="text-gray-600 mt-2">${resource.description}</p>
                        </div>
                        <a href="${resource.link}" class="self-start text-emerald-600 hover:text-emerald-800 font-medium">Learn More</a>
                    </div>
                </div>
            `;
        });
        
        resourcesContainer.innerHTML = resourcesHTML;
    }
    
    // Initialize the resources fetcher if the resources page is loaded
    if (document.body.classList.contains('resources-page')) {
        fetchMentalHealthResources();
    }
    
    // Enhanced form submission for the join-us page
    const joinForm = document.querySelector('form');
    if (joinForm) {
        joinForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(joinForm);
            const userData = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = joinForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                // In a real implementation, we would send this data to a backend service
                // that would handle the Firecrawl API integration securely
                console.log("Sending user data:", userData);
                
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Success feedback
                alert('🎉 Thank you! Your information has been received. We will contact you via WhatsApp shortly.');
                joinForm.reset();
            } catch (error) {
                console.error("Error submitting form:", error);
                alert('There was an error sending your request. Please try again.');
            } finally {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    // WhatsApp integration enhancement
    const whatsappLinks = document.querySelectorAll('[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Log the interaction for analytics
            console.log(`WhatsApp link clicked: ${this.href}`);
            
            // In a real implementation, we could track this event
            // gtag('event', 'click', {'event_category': 'engagement', 'event_label': 'whatsapp_contact'});
        });
    });
});

// Utility function to format dates in a human-readable way
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Function to check if user has scrolled to a certain point
function isScrolledIntoView(elem) {
    const docViewTop = window.pageYOffset;
    const docViewBottom = docViewTop + window.innerHeight;
    
    const elemTop = elem.offsetTop;
    const elemBottom = elemTop + elem.offsetHeight;
    
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}