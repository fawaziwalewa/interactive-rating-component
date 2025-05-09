document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const ratingMessage = document.getElementById('rating-message');
    const ratingCard = document.getElementById('rating-card');
    const thankYouCard = document.getElementById('thank-you-card');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedRating = document.querySelector('input[name="rating"]:checked');
        // Check if a rating is selected
        if (selectedRating) {
            ratingMessage.textContent = `You selected ${selectedRating.value} out of 5`;
            // Hide rating card
            ratingCard.style.display = 'none';
            // Display thank you card
            thankYouCard.style.display = 'block';
        } else {
            alert('Please select a rating before submitting.');
        }
    });
});

