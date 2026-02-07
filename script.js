// MuseScript Dashboard JavaScript

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    console.log('MuseScript Dashboard initialized');
    
    // Add smooth animations to cards
    animateCards();
    
    // Simulate real-time updates
    startRealTimeUpdates();
});

// Animate cards on load
function animateCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            
            requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }, index * 100);
    });
}

// Simulate real-time updates
function startRealTimeUpdates() {
    // Update project count periodically
    setInterval(() => {
        const projectCount = document.querySelector('.card:nth-child(1) .stat-value');
        if (projectCount) {
            const currentValue = parseInt(projectCount.textContent);
            const change = Math.random() > 0.5 ? 1 : -1;
            const newValue = Math.max(0, currentValue + change);
            projectCount.textContent = newValue;
        }
    }, 10000);
    
    // Update execution count
    setInterval(() => {
        const execCount = document.querySelector('.card:nth-child(2) .stat-value');
        if (execCount) {
            const currentValue = parseInt(execCount.textContent.replace(',', ''));
            const newValue = currentValue + Math.floor(Math.random() * 5);
            execCount.textContent = newValue.toLocaleString();
        }
    }, 5000);
}

// Add interactivity to activity items
document.querySelectorAll('.activity-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.backgroundColor = '#e7e7ff';
        setTimeout(() => {
            this.style.backgroundColor = 'white';
        }, 300);
    });
});
