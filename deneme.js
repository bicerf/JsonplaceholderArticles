var data = [];

window.onload = async function () {
    showLoading();
    await loadData();
    hideLoading();
    renderHtml(data);
};

const loadData = async () => {
    let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    data = await response.json();
    console.log('loaddata', data);
};

const showLoading = () => {
    const loadingDiv = document.getElementById("loading");
    loadingDiv.setAttribute("style", "display:block");
};

const hideLoading = () => {
    const loadingDiv = document.getElementById("loading");
    loadingDiv.setAttribute("style", "display:none");
};

const renderHtml = (dataSource) => {

    const container = document.getElementById("article-container");
    for (let index = 0; index < 5; index++) {
        const element = data[index];
        console.log("data",element);
        container.innerHTML += `
        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">         
                <h2 class="accordion-header" id="panelsStayOpen-heading${element?.id}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapse${element?.id}" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapse${element?.id}">
                        <!-- Makale başlığı -->
                        ${element?.title}
                    </button>
                </h2>
                <div id="panelsStayOpen-collapse${element?.id}" class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-heading${element?.id}">
                    <div class="accordion-body">
                        <!-- Makale içeriği -->
                        ${element?.body}
                    </div>
                    <!-- Makale yazarı -->
                    <figure class="mx-4 mt-2 ">
                        <figcaption class="blockquote-footer">
                            ${element?.userId} in <cite title="Source Title">Source Title</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div> `
    }



    // dataSource.forEach((element) => {
    //     container.innerHTML += `
    //     <div class="accordion" id="accordionPanelsStayOpenExample">
    //         <div class="accordion-item">         
    //             <h2 class="accordion-header" id="panelsStayOpen-heading${element?.id}">
    //                 <button class="accordion-button" type="button" data-bs-toggle="collapse"
    //                     data-bs-target="#panelsStayOpen-collapse${element?.id}" aria-expanded="true"
    //                     aria-controls="panelsStayOpen-collapse${element?.id}">
    //                     <!-- Makale başlığı -->
    //                     ${element?.title}
    //                 </button>
    //             </h2>
    //             <div id="panelsStayOpen-collapse${element?.id}" class="accordion-collapse collapse show"
    //                 aria-labelledby="panelsStayOpen-heading${element?.id}">
    //                 <div class="accordion-body">
    //                     <!-- Makale içeriği -->
    //                     ${element?.body}
    //                 </div>
    //                 <!-- Makale yazarı -->
    //                 <figure class="mx-4 mt-2 ">
    //                     <figcaption class="blockquote-footer">
    //                         ${element?.userId} in <cite title="Source Title">Source Title</cite>
    //                     </figcaption>
    //                 </figure>
    //             </div>
    //         </div>
    //     </div> `
        
    // });
}