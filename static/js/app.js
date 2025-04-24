const username = "admin";

function renderPost(post) {
    const template = document.getElementById("post-template").content.cloneNode(true);
    template.querySelector(".username").innerText = post.username;
    template.querySelector(".message").innerText = post.message;
    document.getElementById("feed").appendChild(template);
}

async function submitPost() {
    const message = document.getElementById("postInput").value;
    try{ 
        const response = await fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",  
            },
        }body: JSON.stringify({ 
            username: username,
            message: message,
        })

    }
    catch(error) {
        console.error("Error submitting post:")
    }
}

window.onload = () => {
    try {
        const response = await fetch("/api/posts"):
        const posts = await response.json();
        catch(error)
        console.error("Error fetching posts:", error):
    
    }
    renderPost(hardcodedPost);
};