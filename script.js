function showFilter() {

    var filterForm = document.getElementById("filterContent");

    if (filterForm.style.display === "none") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }
}

function showAddNew() {

    var newForm = document.getElementById("newContent");

    if (newForm.style.display === "none" || newForm.style.display === "") {
        newForm.style.display = "flex";
    } else {
        newForm.style.display = "none";
    }
}

function filterArticles() {

    var opinionChecked = document.getElementById("opinionCheckbox").checked;
    var recipeChecked = document.getElementById("recipeCheckbox").checked;
    var updateChecked = document.getElementById("updateCheckbox").checked;

    var articles = document.getElementById("articleList").getElementsByTagName("article");

    for (var i = 0; i < articles.length; i++) {

        if (articles[i].className === "opinion") {
            if (opinionChecked) {
                articles[i].style.display = "block";
            } else {
                articles[i].style.display = "none";
            }
        }

        if (articles[i].className === "recipe") {
            if (recipeChecked) {
                articles[i].style.display = "block";
            } else {
                articles[i].style.display = "none";
            }
        }

        if (articles[i].className === "update") {
            if (updateChecked) {
                articles[i].style.display = "block";
            } else {
                articles[i].style.display = "none";
            }
        }
    }
}

function addNewArticle() {

    var title = document.getElementById("inputHeader").value;
    var text = document.getElementById("inputArticle").value;

    var type = "";
    var markerText = "";

    if (document.getElementById("opinionRadio").checked) {
        type = "opinion";
        markerText = "Opinion";
    }

    if (document.getElementById("recipeRadio").checked) {
        type = "recipe";
        markerText = "Recipe";
    }

    if (document.getElementById("lifeRadio").checked) {
        type = "update";
        markerText = "Update";
    }

    if (title === "" || text === "" || type === "") {
        alert("Please fill out all fields.");
        return;
    }

    var newArticle = document.createElement("article");
    newArticle.className = type;

    newArticle.innerHTML =
        "<span class='marker'>" + markerText + "</span>" +
        "<h2>" + title + "</h2>" +
        "<p>" + text + "</p>" +
        "<p><a href='moreDetails.html'>Read more...</a></p>";

    document.getElementById("articleList").appendChild(newArticle);
    document.getElementById("newContent").reset();
}