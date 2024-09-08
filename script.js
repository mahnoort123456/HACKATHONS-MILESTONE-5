var _a;
(_a = document.getElementById('createResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('contact');
    var socialMediaElement = document.getElementById('socialMedia');
    var qualificationElement = document.getElementById('qualification');
    var fieldElement = document.getElementById('field');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById('username');
    if (nameElement && emailElement &&
        contactElement && socialMediaElement &&
        qualificationElement && fieldElement &&
        experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var socialMedia = socialMediaElement.value;
        var qualification = qualificationElement.value;
        var field = fieldElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s*/g, '_'), "_cv.html");
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Name:</strong><span id=\"edit-name\" class=\"editable\"> ".concat(name_1, " </span></p>\n<p><strong>Email:</strong><span id=\"edit-name\" class=\"editable\"> ").concat(email, "</span> </p>\n<p><strong>Contact:</strong><span id=\"edit-name\" class=\"editable\"> ").concat(contact, " </span></p>\n<p><strong>Website Links:</strong><span id=\"edit-name\" class=\"editable\"> ").concat(socialMedia, " </span></p>\n\n<h2>Education</h2>\n<p><strong>Qualification: </strong> <span id=\"edit-name\" class=\"editable\">").concat(qualification, "</span> </p>\n<p><strong>Field:</strong><span id=\"edit-name\" class=\"editable\"> ").concat(field, " </span></p>\n\n<h2>Work Experience</h2>\n<p id=\"edit-name\" class=\"editable\"> ").concat(experience, " </p>\n\n<h2>Top Skills</h2>\n<p id=\"edit-name\" class=\"editable\">Top Skills").concat(skills, " </p>");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset-utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your Resume';
        var resumeOutptElement = document.getElementById('createResume');
        if (resumeOutptElement) {
            resumeOutptElement.innerHTML = resumeOutput;
            resumeOutptElement.appendChild(downloadLink);
            makeEditable();
        }
    }
    else {
        console.error("one or more outputs are missing");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
