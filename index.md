---
layout: default
---
<div class="first-content d-flex flex-column flex-md-row justify-content-between"><div class="order-md-1 d-flex justify-content-center align-items-center first-step" ><div><h1>Olá, sou  Desenvolvedor Web <b style="color:#1e8a14;">Full Stack</b>.</h1><br/> <p>Com mais de 4 anos de experiência no Mercado.</p></div></div><div class="order-md-2 d-flex justify-content-center align-items-center first-step" ><img src="https://williambarros.com.br/assets/image/destaque.webp" class="first-step-image" alt="Tecnologia e Desenvolvimento"></div></div>

<div style="border-top:3px dashed #4b515f; width:100%;"><br/><h3>Habilidades</h3><div class="d-flex flex-row flex-nowrap overflow-auto justify-content-between w-100">
    
<img src="https://williambarros.com.br/assets/image/competencias/2.png" width="150" height="150" alt="Node js" />
  <img src="https://williambarros.com.br/assets/image/competencias/3.png" width="150" height="150" alt="Php" />
    <img src="https://williambarros.com.br/assets/image/competencias/4.png" width="150" height="150" alt="React JS" />
    <img src="https://williambarros.com.br/assets/image/competencias/5.png" width="150" height="150" alt="React Native" />
    <img src="https://williambarros.com.br/assets/image/competencias/6.png" width="150" height="150" alt="Typescript" />
    <img src="https://williambarros.com.br/assets/image/competencias/7.png" width="150" height="150" alt="Javascript" />
    <img src="https://williambarros.com.br/assets/image/competencias/8.png" width="150" height="150" alt="MySQL" />
    <img src="https://williambarros.com.br/assets/image/competencias/9.png" width="150" height="150" alt="PostgreSQL" />
    <img src="https://williambarros.com.br/assets/image/competencias/10.png" width="150" height="150" alt="bootstrap" />
     <img src="https://williambarros.com.br/assets/image/competencias/11.png" width="150" height="150" alt="Electron JS"/>
    <img src="https://williambarros.com.br/assets/image/competencias/12.png" width="150" height="150"  alt="Socket.io"/>
    
</div></div><div style="border-top:3px dashed #4b515f; width:100%;"><br/><h3>Meus Projetos</h3> </div> <div style="border-top:3px dashed #4b515f; width:100%;"><br/><h3> + Blog</h3> </div><div class="blog container" >{% for post in site.posts limit:6 %}<div class="card"><a href="{{ BASE_PATH }}{{ post.url }}" class="linkcard"><img src="{{ post.image }}" class="card-img-top " alt="{{ post.title }}" /><div class="card-body"><h5 class="card-title">{{ post.title }}</h5><p class="card-text">{{ post.preview }}</p></div></a></div>{% endfor %}</div>


               


         
           
