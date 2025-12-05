function updateProfileData(profileData){

    let profileName = document.getElementById("profileName")
    profileName.innerHTML = `Olá,<br>eu sou ${profileData.name}`

    let profileImg = document.getElementById("profileImg")
    profileImg.src = profileData.photo
    profileImg.alt = profileData.name
    profileImg.title = profileData.name

    let profileJob1 = document.getElementById("profileJob1")
    profileJob1.innerHTML = `<i class="fa-solid fa-user"></i> ${profileData.job[0]}`
    
    let profileJob2 = document.getElementById("profileJob2")
    profileJob2.innerHTML = `<i class="fa-solid fa-user"></i> ${profileData.job[1]}`

    let profileLocation = document.getElementById("profileLocation")
    profileLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${profileData.location}`

    let profileEmail = document.getElementById("profileEmail")
    profileEmail.innerHTML = `<i class="fa-solid fa-envelope"></i> ${profileData.email}`
    profileEmail.href = `mailto:${profileData.email}`

}

function updateHardSkills(profileData){
    let hardSkills = document.getElementById("hardSkills")
    hardSkills.innerHTML = profileData.skills.hardSkills.map((skill) => `<li><i class="${skill.logo}"></i></li>`).join("")
}

function updateSoftSkills(profileData){
    let softSkills = document.getElementById("softSkills")
    softSkills.innerHTML = profileData.skills.softSkills.map((skill) => `<li>${skill}</li>`).join("")
}

function updateLanguages(profileData){
    let languages = document.getElementById("languages")
    languages.innerHTML = profileData.languages.map((language) => `<li>${language}</li>`).join("")
}

function updatePortfolio(profileData){
    let portfolio = document.getElementById("portfolio")
    portfolio.innerHTML = profileData.portfolio.map((project) => {
        return `
        <li>
            <a href="${project.url}" target="_blank"><h3 class="title"><i class="${project.logo}"></i>${project.name}</h3></a>
            <p>${project.description}</p>
        </li>
        `
    }).join("")
}

function updateExperience(profileData){
    let experience = document.getElementById("experience")
    experience.innerHTML = profileData.professionalExperience.map((job) => {
        return `
        <li>
            <h3 class="title">${job.name}</h3>
            <p class="period"><i class="fa-solid fa-calendar-days"></i>${job.period}</p>
            <p class="description">${job.description}</p>
        </li>
        `
    }).join("")
}

(async () => {
    let profileData = await fetchProfileData()
    updateProfileData(profileData)
    updateHardSkills(profileData)
    updateSoftSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)

})()

