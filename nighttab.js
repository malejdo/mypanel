const grupos = [
  {
    "name": "Grupo 1",
    "items": [
      {
        "name": "Enlace 1",
        "url": "https://www.example.com",
        "icon": "globe",
        "icon_prefix": "fas"
      },
      {
        "name": "Enlace 2",
        "url": "https://www.google.com",
        "icon": "star",
        "icon_prefix": "fas"
      }
    ]
  }
];


function renderGrupos() {
  const contenedor = document.getElementById('contenedor');
  grupos.forEach(grupo => {
    const divGrupo = document.createElement('div');
    divGrupo.className = 'grupo';
    divGrupo.innerHTML = '<h2>' + grupo.name + '</h2>';
    const divLinks = document.createElement('div');
    divLinks.className = 'links';
    grupo.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'link-card';
      // Usar FontAwesome si hay icono, si no, mostrar un emoji por defecto
      let iconHtml = item.icon ? '<i class="' + item.icon_prefix + ' fa-' + item.icon + ' icon"></i>' : '<span class="icon">🔗</span>';
      card.innerHTML = iconHtml +
        '<a class="link-name" href="' + item.url + '" target="_blank">' + item.name + '</a>';
      divLinks.appendChild(card);
    });
    divGrupo.appendChild(divLinks);
    contenedor.appendChild(divGrupo);
  });
}

renderGrupos();
