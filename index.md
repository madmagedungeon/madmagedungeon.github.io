---
layout: default
---
<div class="first-content d-flex flex-column flex-md-row justify-content-between">
    <div class="order-md-1 d-flex justify-content-center align-items-center first-step">
        <div>
            <h1> Entre nesta <b style="color:#ff034f;">Dungeon</b> e fique maluco por <b style="color:#ff034f;">RPG</b>!</h1><br />
            <p>  </p>
        </div>
    </div>
    <div class="order-md-2 d-flex justify-content-center align-items-center first-step">
        <!-- <img src="https://cdn.jsdelivr.net/gh/madmagedungeon/mmd-images@main/rpg-party-photo.webp" class="first-step-image" alt="Party de personagens de rpg">| -->
    

   
</div></div>
<div style=" width:100%;"><br />
    <h2>Últimas Postagens</h2>
</div>
<div class="blog container">{% for post in site.posts limit:9 %}<div class="card"><a
            href="{{ BASE_PATH }}{{ post.url }}" class="linkcard"><img src="{{ post.image }}" class="card-img-top "
                alt="{{ post.title }}" />
            <div class="card-body">
                <span class="card-title master-card">{{ post.title }}</span>
                <p class="card-text">{{ post.preview }}</p>
            </div>
        </a></div>{% endfor %}</div><div class="d-flex justify-content-center"><a href="https://madmagedungeon.github.io/blog" class="btn btn-lg btn-danger" style="   font-family: 'League Spartan', sans-serif; width:75%;background-color: #ff034f;border: 5px solid #ff034f73;"> Veja mais Posts! </a></div><br/><br/><br/>
     
