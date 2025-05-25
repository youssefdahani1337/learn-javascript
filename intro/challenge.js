let theTitle = "JS", paragDesc = "javascript", publishDate = "10/25";


let myDiv = `
    <div>
        <h3>Hello ${theTitle}</h3>
        <p>${paragDesc}</p>
        <span>${publishDate}</span>  
        </div>
`;

document.write(myDiv.repeat(4));