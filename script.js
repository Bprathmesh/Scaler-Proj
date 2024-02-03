function submitTweet() {
    var tweetText = document.getElementById("tweetText").value.trim();
    if (tweetText === "") {
        alert("Please enter your tweet before submitting..");
        return;
    }

    var tweetList = document.getElementById("tweetList");

    var tweetCard = document.createElement("div");
    tweetCard.classList.add("tweet-card");

    var topContainer = document.createElement("div");
    topContainer.classList.add("topcontainer");

    
    var profileImage = document.createElement("img");
    profileImage.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739";
    profileImage.alt = "Profile Image";

    
    var tweetParagraph = document.createElement("p");
    tweetParagraph.textContent = tweetText;

    topContainer.appendChild(profileImage);
    topContainer.appendChild(tweetParagraph);

    
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function() {
        tweetList.removeChild(tweetCard);
    };

    topContainer.appendChild(deleteButton);

    tweetCard.appendChild(topContainer);

    tweetList.insertBefore(tweetCard, tweetList.firstChild);

    document.getElementById("tweetText").value = "";
}
