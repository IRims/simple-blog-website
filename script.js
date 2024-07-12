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
    posts.forEach(function (post, index) {
      let postElement = document.createElement("div");
      postElement.className = "list-group-item";

      let postTitle = document.createElement("h5");
      postTitle.textContent = post.title;
      postElement.appendChild(postTitle);

      let postContent = document.createElement("p");
      postContent.textContent = post.content;
      postElement.appendChild(postContent);

      let editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "btn btn-secondary btn-sm mr-2";
      editButton.onclick = function () {
        let newTitle = prompt("Enter new title", post.title);
        let newContent = prompt("Enter new content", post.content);

        if (newTitle && newContent) {
          posts[index] = { title: newTitle, content: newContent };
          localStorage.setItem("posts", JSON.stringify(posts));
          window.location.reload();
        }
      };
      postElement.appendChild(editButton);

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "btn btn-danger btn-sm";
      deleteButton.onclick = function () {
        posts.splice(index, 1);
        localStorage.setItem("posts", JSON.stringify(posts));
        window.location.reload();
      };
      postElement.appendChild(deleteButton);

      document.getElementById("posts").appendChild(postElement);
    });
  }
});
