const produtos = [
  
    { tipo: 'CAFÉ GEISSA',
      valor: 'R$34,99',
      url: '/assets/images/coffe-1.jpg'
    },
    
    { tipo: 'CAFÉ TRADICIONAL',
      valor: 'R$30,00',
      url: '/assets/images/coffe-2.jpg'
    },

    { tipo: 'CAFÉ MANTIQUEIRA',
      valor: 'R$29,99',
      url: '/assets/images/coffe-3.jpg'
    },

    { tipo: 'CAFÉ CLÁSSICO',
      valor: 'R$24,99',
      url: '/assets/images/coffe-4.jpg'
    },
    { tipo: 'CAFÉ CHAPADA MG',
      valor: 'R$19,99',
      url: '/assets/images/coffe-5.jpg'
    },
    { tipo: 'CAFÉ CERRADO MG',
      valor: 'R$14.99',
      url: '/assets/images/coffe-6.jpg'
    }

]

const carregarImagens =  (imagens, container) =>{
    imagens.forEach( conteudo => {
        containerItems.innerHTML+= `
        <div class="shop-item">
            <img src="${conteudo.url}" alt="">
            <p>${conteudo.tipo}</p>
            <div class="value">${conteudo.valor}</div>
            <div class="add">ADICIONAR AO CARRINHO</div>
        </div>
        `
    });
}

const containerItems = document.querySelector('.shop-items');
carregarImagens(produtos, containerItems);

addEventListener('scroll', function(){
  const navBar = document.querySelector('header')
  const posY = window.scrollY;
  posY >= 620? navBar.classList.add('bgH') : navBar.classList.remove('bgH')
})

function toogleMenu() {
  const nav = document.getElementById('nav-bar')
  nav.classList.toggle('active')
}

document.getElementById('menu').addEventListener('click', toogleMenu)
