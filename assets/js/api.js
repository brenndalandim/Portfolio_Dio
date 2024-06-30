
async function fetchProfileData(){
    let url = "https://raw.githubusercontent.com/brenndalandim/Portfolio_Dio/main/profile.json?token=GHSAT0AAAAAACUHYSMT23WVVOXGEGGLX7CWZUB3UGQ"

    let fetching =  await fetch(url)
    return await fetching.json()
}