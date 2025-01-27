export const mainContent = `
    <div class="main-content flex">
        <header>
            <h1 tabindex="0">Contact Us</h1>
        </header>
        <form id="contact-form" class="flex" novalidate>
            <div class="name flex">
                <div class="input-group flex">
                    <label for="first-name">First Name <span class="green-6"  aria-hidden="true">*</span></label>
                    <input type="text" id="first-name" name="first-name" required autocomplete="given-name">
                    <label tabindex="0" class="error-message">This field is required</label>
                </div>
                <div class="input-group flex">
                    <label for="last-name">Last Name <span class="green-6"  aria-hidden="true">*</span></label>
                    <input type="text" id="last-name" name="last-name" required autocomplete="family-name">
                    <label tabindex="0" class="error-message">This field is required</label>
                </div>
            </div>
            <div class="input-group flex">
                <label for="email">Email Address <span class="green-6"  aria-hidden="true">*</span></label>
                <input type="email" id="email" name="email" required autocomplete="email">
                <label tabindex="0" class="error-message">Please enter a valid email address</label>
            </div>
            <fieldset>
                <legend>Query Type <span class="green-6"  aria-hidden="true">*</span></legend>
                <div class="input-group query-type flex">
                    <div class="query-type-option">
                        <input type="radio" id="general" name="query-type" value="general">
                        <label for="general">General Enquiry</label>
                    </div>
                    <div class="query-type-option">
                        <input type="radio" id="support" name="query-type" value="support">
                        <label for="support">Support Request</label>
                    </div>
                </div>    
                <label tabindex="0" class="error-message query-type-error">Please select a query type</label> 
            </fieldset>
            <div class="input-group flex">
                <label for="message">Message <span class="green-6"  aria-hidden="true">*</span></label>
                <textarea id="message" name="message" rows="4" required></textarea>
                <label tabindex="0" class="error-message">This field is required</label>
            </div>
            <div class="input-group">
                <input type="checkbox" id="consent" name="consent" required>
                <label for="consent">I consent to being contacted by the team <span class="green-6"  aria-hidden="true">*</span></label>
                <label tabindex="0" class="error-message">To submit this form, please consent to being contacted</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
`;
