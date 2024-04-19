const categories = [
    {
        name: 'Atención médica y seguimiento de enfermería',
        services: [
            'Evaluación médica inicial y seguimiento regular',
            'Administración de medicamentos',
            'Tratamiento de enfermedades crónicas',
            'Servicios de fisioterapia y rehabilitación'
        ]
    }
    ,
    {
        name: 'Servicios de apoyo',
        services: [
            'Servicios de comidas y nutrición',
            'Servicios de lavandería y limpieza',
            'Servicios de transporte',
            'Servicios de mantenimiento de la casa'
        ]
    },
    {
        name: 'Servicios de cuidado personal',
        services: [
            'Ayuda con la higiene personal',
            'Ayuda con la movilidad',
            'Ayuda con el baño',
            'Ayuda con la alimentación'
        ]
    },
    {
        name: 'Servicios de apoyo emocional',
        services: [
            'Apoyo emocional y social',
            'Actividades recreativas y de ocio',
            'Servicios de acompañamiento'
        ]
    }
]

const renderAllServices = () => {
    $categoriesTableHeader.textContent = 'Todos los Servicios';
    $categoriesTableBody.innerHTML = '';

    categories.forEach((category) => {
        category.services.forEach((service) => {
            const $service = document.createElement('tr');
            $service.classList.add('table__row');
            $service.innerHTML = `<td>${service}</td>`;
            $categoriesTableBody.appendChild($service);
        })
    });
}

const $categoriesList = document.querySelector('.categories__container .categories__list .list');

const clearCategoriesBtn = document.querySelector('.clean__category__filter__btn');

const $categoriesTableHeader = document.querySelector('.table__head .table__row th');

const $categoriesTableBody = document.querySelector('.table__body');

renderAllServices();

const clearCategories = () => {
    const $categoriesItems = document.querySelectorAll('.category__item');
    renderAllServices();
    $categoriesItems.forEach(category => {
        category.setAttribute('selected', 'false');
        clearCategoriesBtn.setAttribute('disabled', 'true');
    })
}

categories.forEach((service, index) => {
    const $category = document.createElement('button');
    $category.classList.add('category__item');
    $category.setAttribute('type', 'button');
    $category.setAttribute('selected', 'false');
    $category.textContent = service.name;

    $categoriesList.appendChild($category);

    $category.addEventListener('click', () => {
        clearCategories();
        $category.setAttribute('selected', 'true');
        clearCategoriesBtn.removeAttribute('disabled');

        $categoriesTableHeader.textContent = service.name;

        $categoriesTableBody.innerHTML = '';

        categories[index].services.forEach((service) => {
            const $service = document.createElement('tr');
            $service.classList.add('table__row');
            $service.innerHTML = `<td>${service}</td>`;
            $categoriesTableBody.appendChild($service);
        })
    });
});

clearCategoriesBtn.addEventListener('click', () => {
    clearCategories();
});