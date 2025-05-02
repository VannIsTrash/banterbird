const username = "admin";

<<<<<<< Updated upstream
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
=======
function renderPost(post, isNew = false) {
  const template = document
    .getElementById("post-template")
    .content.cloneNode(true);
  template.querySelector(".username").innerText = post.username;
  template.querySelector(".message").innerText = post.message;
  if (isNew) {
    document.getElementById("feed").prepend(template);
  } else {
    document.getElementById("feed").appendChild(template);
  }
}

async function submitPost() {
  const message = document.getElementById("postInput").value;
  try {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        message: message,
      }),
    });
    if (response.ok) {
      renderPost({ username: username, message: message }, true);
      document.getElementById("postInput").value = ""; // Clear the input field for your tweet storm!
    }
  } catch (error) {
    console.error("Error submitting post:", error);
  }
>>>>>>> Stashed changes
}

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
window.onload = () => {
    try {
        const response = await fetch("/api/posts"):
        const posts = await response.json();
        catch(error)
        console.error("Error fetching posts:", error):
    
    }
    renderPost(hardcodedPost);
};
<<<<<<< Updated upstream
=======
window.onload = async () => {
    try {
   const response = await fetch("/api/posts");
   const posts = await response.json();
   posts.forEach((post) => renderPost(post));
}  catch(error) {
        console.error("Error fetching posts:", error);
    }
    };
    renderPost(hardcodedPost);
>>>>>>> Stashed changes
=======
window.onload = async () => {
    try {
   const response = await fetch("/api/posts");
   const posts = await response.json();
   posts.forEach((post) => renderPost(post));
}  catch(error) {
        console.error("Error fetching posts:", error);
    }
    };
    renderPost(hardcodedPost);
>>>>>>> Stashed changes
=======
window.onload = async () => {
    try {
   const response = await fetch("/api/posts");
   const posts = await response.json();
   posts.forEach((post) => renderPost(post));
}  catch(error) {
        console.error("Error fetching posts:", error);
    }
    };
    renderPost(hardcodedPost);
>>>>>>> Stashed changes
=======


setInterval(async () => {
  try {
      const response = await fetch("/api/posts");
      const posts = await response.json();
      document.getElementById("feed").innerHTML = "";
      posts.forEach((post) => renderPost(post));
  } catch (error) {
    console.error("Error polling for posts:", error);
  }
}, 5000);
>>>>>>> Stashed changes
