
async function fetchProfileData(){
    let url = "https://raw.githubusercontent.com/brenndalandim/Portfolio_Dio/main/profile.json"

    let fetching =  await fetch(url)
    return await fetching.json()
}