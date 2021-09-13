<template>
  <div class="carousel">
    <div class="progress-bar progress-bar--primary hide-on-desktop">
      <div class="progress-bar__fill"></div>
    </div>

    <header class="main-post-wrapper">
      <div class="slides">
        <article class="main-post main-post--active">
          <div class="main-post__image">
            <img
              src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
              alt="New McLaren wind tunnel 'critical' to future performance, says Tech Director Key"
            />
          </div>
          <div class="sm:mx-auto xl:max-w-6xl text-white">
            <div class="main-post__content">
              <div class="main-post__tag-wrapper">
                <span class="main-post__tag">News</span>
              </div>
              <h1 class="main-post__title text-center xl:text-left">
                Why Cryptocurrency Dropped so low today
              </h1>
            </div>
          </div>
        </article>
        <article class="main-post main-post--not-active">
          <div class="main-post__image">
            <img
              src="https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80"
              alt="What To Watch For in the 2019 Hungarian Grand Prix"
            />
          </div>

           <div class="sm:mx-auto xl:max-w-6xl text-white">

              <div class="main-post__content">
            <div class="main-post__tag-wrapper">
              <span class="main-post__tag">Breaking News</span>
            </div>
            <h1 class="main-post__title text-center xl:text-left">
              A crypto hedge fund manager breaks down three strategies
            </h1>
          
          </div>

           </div>
          
        </article>
        <article class="main-post main-post--not-active">
          <div class="main-post__image">
            <img
              src="https://images.unsplash.com/photo-1623920813183-ef1b2eb4a562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80"
              alt="Hamilton wants harder championship fight from Leclerc and
            Verstappen"
            />
          </div>
          <div class="sm:mx-auto xl:max-w-6xl text-white">
               <div class="main-post__content">
            <div class="main-post__tag-wrapper">
              <span class="main-post__tag">Latest News</span>
            </div>
            <h1 class="main-post__title text-auto text-center xl:text-left ">
              Bitcoin Achieves Major Milestone
            </h1>
            
          </div>
          </div>
         
        </article>
      </div>
    </header>
    <div class="posts-wrapper max-w-7xl hide-on-mobile mr-0 xl:-ml-40 xl:ml-92">
      <article class="post post--active">
        <div class="progress-bar">
          <div class="progress-bar__fill"></div>
        </div>
        <header class="post__header">
          <span class="post__tag">News</span>
          <p class="post__published">16 August2021</p>
        </header>
        <h2 class="post__title">
          A crypto hedge fund manager breaks down three strategies
        </h2>
      </article>
      <article class="post">
        <div class="progress-bar">
          <div class="progress-bar__fill"></div>
        </div>
        <header class="post__header">
          <span class="post__tag">News</span>
          <p class="post__published">12 August2021</p>
        </header>
        <h2 class="post__title">Bitcoin drops below $45k</h2>
      </article>
      <article class="post">
        <div class="progress-bar">
          <div class="progress-bar__fill"></div>
        </div>
        <header class="post__header">
          <span class="post__tag">News</span>
          <p class="post__published">08 August2021</p>
        </header>
        <h2 class="post__title">
          Hamilton wants harder championship fight from Leclerc and Verstappen
        </h2>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  mounted() {
    let mainPosts = document.querySelectorAll(".main-post");
    let posts = document.querySelectorAll(".post");
    let i = 0;
    let postIndex = 0;
    let currentPost = posts[postIndex];
    let currentMainPost = mainPosts[postIndex];
    let progressInterval = setInterval(progress, 50); // 180
    function progress() {
      if (i === 100) {
        i = -5;
        // reset progress bar
        currentPost.querySelector(".progress-bar__fill").style.width = 0;
        document.querySelector(
          ".progress-bar--primary .progress-bar__fill"
        ).style.width = 0;
        currentPost.classList.remove("post--active");
        postIndex++;
        currentMainPost.classList.add("main-post--not-active");
        currentMainPost.classList.remove("main-post--active");
        // reset postIndex to loop over the slides again
        if (postIndex === posts.length) {
          postIndex = 0;
        }
        currentPost = posts[postIndex];
        currentMainPost = mainPosts[postIndex];
      } else {
        i++;
        currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
        document.querySelector(
          ".progress-bar--primary .progress-bar__fill"
        ).style.width = `${i}%`;
        currentPost.classList.add("post--active");
        currentMainPost.classList.add("main-post--active");
        currentMainPost.classList.remove("main-post--not-active");
      }
    }
  },
};
</script>