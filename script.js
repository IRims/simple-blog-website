document.addEventListener("DOMContentLoaded", function () {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  if (document.getElementById("postForm")) {
    document
      .getElementById("postForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        let title = document.getElementById("title").value;
        let content = document.getElementById("content").value;

        let post = {
          title: title,
          content: content,
        };

        posts.push(post);
        localStorage.setItem("posts", JSON.stringify(posts));

        window.location.href = "index.html";
      });
  }

  if (document.getElementById("posts")) {
    posts.forEach(function (post) {
      let postElement = document.createElement("div");
      postElement.className = "list-group-item";

      let postTitle = document.createElement("h5");
      postTitle.textContent = post.title;
      postElement.appendChild(postTitle);

      let postContent = document.createElement("p");
      postContent.textContent = post.content;
      postElement.appendChild(postContent);

      document.getElementById("posts").appendChild(postElement);
    });
  }
});
