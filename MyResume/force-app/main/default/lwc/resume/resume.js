import { LightningElement } from 'lwc';
import resumeCSS from '@salesforce/resourceUrl/resumeCSS'; // Replace 'resumeCSS' with the actual static resource name of your CSS file

export default class Resume extends LightningElement {
    renderedCallback() {
        Promise.all([
            loadStyle(this, resumeCSS)
        ]).catch(error => {
            console.error('Error loading CSS file:', error);
        });

        // Add fade-in animation to resume sections
        const sections = this.template.querySelectorAll('.section');
        sections.forEach((section, index) => {
            section.style.animation = `fadeIn 1s ease ${index * 0.5}s`;
        });
    }

    // Handle click event on the header to toggle additional information (optional)
    handleHeaderClick(event) {
        const header = this.template.querySelector('.header');
        header.classList.toggle('show-info');
    }
}
