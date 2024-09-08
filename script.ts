document.getElementById('createResume')?.addEventListener('submit', function(event){
    event.preventDefault();

const nameElement = document.getElementById('name') as HTMLInputElement
const emailElement = document.getElementById('email') as HTMLInputElement
const contactElement = document.getElementById('contact') as HTMLInputElement
const socialMediaElement = document.getElementById('socialMedia') as HTMLInputElement
const qualificationElement = document.getElementById('qualification') as HTMLInputElement
const fieldElement = document.getElementById('field') as HTMLInputElement
const experienceElement = document.getElementById('experience') as HTMLInputElement
const skillsElement = document.getElementById('skills') as HTMLInputElement;

const usernameElement = document.getElementById('username') as HTMLInputElement

if(nameElement && emailElement && 
    contactElement && socialMediaElement && 
    qualificationElement && fieldElement && 
    experienceElement && skillsElement && usernameElement)
    {

    const name = nameElement.value;
    const email = emailElement.value;
    const contact = contactElement.value;
    const socialMedia= socialMediaElement.value;
    const qualification = qualificationElement.value;
    const field = fieldElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const username = usernameElement.value;
    const uniquePath = `resumes/${username.replace(/\s*/g,'_')}_cv.html`

    const resumeOutput = `
<h2>Resume</h2>
<p><strong>Name:</strong><span id="edit-name" class="editable"> ${name} </span></p>
<p><strong>Email:</strong><span id="edit-name" class="editable"> ${email}</span> </p>
<p><strong>Contact:</strong><span id="edit-name" class="editable"> ${contact} </span></p>
<p><strong>Website Links:</strong><span id="edit-name" class="editable"> ${socialMedia} </span></p>

<h2>Education</h2>
<p><strong>Qualification: </strong> <span id="edit-name" class="editable">${qualification}</span> </p>
<p><strong>Field:</strong><span id="edit-name" class="editable"> ${field} </span></p>

<h2>Work Experience</h2>
<p id="edit-name" class="editable"> ${experience} </p>

<h2>Top Skills</h2>
<p id="edit-name" class="editable">Top Skills${skills} </p>`;

const downloadLink = document.createElement('a')
downloadLink.href= 'data:text/html;charset-utf-8,' + encodeURIComponent(resumeOutput)
downloadLink.download = uniquePath;
downloadLink.textContent='Download Your Resume'

const resumeOutptElement = document.getElementById('createResume')
if(resumeOutptElement){
    resumeOutptElement.innerHTML = resumeOutput
    resumeOutptElement.appendChild(downloadLink)
makeEditable();
}
} else {
    console.error(`one or more outputs are missing`)
}

}
)

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click' , function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            if(currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                const input = document.createElement('input')
                    input.type = "text"
                    input.value = currentValue
                    input.classList.add('editing-input')
                    input.addEventListener('blur', function(){
                        currentElement.textContent = input.value;
                        currentElement.style.display = 'inline'
                        input.remove()
                    })
                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
}