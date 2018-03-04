TODO: 

a) Probamos con el proyecto en Angular
b) Seguimos el ejercicio de "rutas" de https://angular.io/guide/lazy-loading-ngmodules
c) Combinamos con el uso de "pull request"
d) Probamos estrategia de branching GitFlow
    a) Desde source tree
    b) Desde plugin de git
    c) Desde VS Code ...
   ¿Que mas?

#User pezequiel

Todo:
    - crear proyecto con angular cli
    - rutas
    - trabajo en el master de pezequiel por ahora ... 


# --------------
quela: Quality UELA
# -------------- 


nvm use -v 9.0.0
Now using node v9.0.0 (npm v5.5.1)

# Step 01: Crear app

    ng new quela --routing
    cd quela
    ng test
    mg e2e
    ng serve


_________
    ng generate module    customers --routing
    ng generate component customers/customer-list

ng generate module    dataset-01 --routing
ng generate component dataset-01/dashboard-air
ng generate component dataset-01/dashboard-water

ng generate module    dataset-02 --routing
ng generate component dataset-02/dashboard-air
ng generate component dataset-02/dashboard-water

ng generate module dataset-02 --routing

----------

    ng generate module    dataset-01 --routing
    ng generate component dataset-01/dashboard-air
    ng generate component dataset-01/dashboard-water

        ╭─pabloinchausti@MacBook-Pro-de-Pablo ~/Desktop/DevOps/code/github/pezequiel/NodeJS/angular/quela  ‹master*›
        ╰─$ ng generate module    dataset-01 --routing
        create src/app/dataset-01/dataset-01-routing.module.ts (252 bytes)
        create src/app/dataset-01/dataset-01.module.ts (292 bytes)

        ╭─pabloinchausti@MacBook-Pro-de-Pablo ~/Desktop/DevOps/code/github/pezequiel/NodeJS/angular/quela  ‹master*›
        ╰─$ ng generate component dataset-01/dashboard-air
        create src/app/dataset-01/dashboard-air/dashboard-air.component.css (0 bytes)
        create src/app/dataset-01/dashboard-air/dashboard-air.component.html (32 bytes)
        create src/app/dataset-01/dashboard-air/dashboard-air.component.spec.ts (671 bytes)
        create src/app/dataset-01/dashboard-air/dashboard-air.component.ts (296 bytes)
        update src/app/dataset-01/dataset-01.module.ts (394 bytes)

        ╭─pabloinchausti@MacBook-Pro-de-Pablo ~/Desktop/DevOps/code/github/pezequiel/NodeJS/angular/quela  ‹master*›
        ╰─$ ng generate component dataset-01/dashboard-water
        create src/app/dataset-01/dashboard-water/dashboard-water.component.css (0 bytes)
        create src/app/dataset-01/dashboard-water/dashboard-water.component.html (34 bytes)
        create src/app/dataset-01/dashboard-water/dashboard-water.component.spec.ts (685 bytes)
        create src/app/dataset-01/dashboard-water/dashboard-water.component.ts (304 bytes)
        update src/app/dataset-01/dataset-01.module.ts (506 bytes)

----------

    ng generate module    dataset-02 --routing
    ng generate component dataset-02/dashboard-air
    ng generate component dataset-02/dashboard-water

        ╭─pabloinchausti@MacBook-Pro-de-Pablo ~/Desktop/DevOps/code/github/pezequiel/NodeJS/angular/quela  ‹master*›
        ╰─$ ng generate module    dataset-02 --routing
        create src/app/dataset-02/dataset-02-routing.module.ts (252 bytes)
        create src/app/dataset-02/dataset-02.module.ts (292 bytes)
        
        ╭─pabloinchausti@MacBook-Pro-de-Pablo ~/Desktop/DevOps/code/github/pezequiel/NodeJS/angular/quela  ‹master*›
        ╰─$ ng generate component dataset-02/dashboard-air
        create src/app/dataset-02/dashboard-air/dashboard-air.component.css (0 bytes)
        create src/app/dataset-02/dashboard-air/dashboard-air.component.html (32 bytes)
        create src/app/dataset-02/dashboard-air/dashboard-air.component.spec.ts (671 bytes)
        create src/app/dataset-02/dashboard-air/dashboard-air.component.ts (296 bytes)
        update src/app/dataset-02/dataset-02.module.ts (394 bytes)
        
        ╭─pabloinchausti@MacBook-Pro-de-Pablo ~/Desktop/DevOps/code/github/pezequiel/NodeJS/angular/quela  ‹master*›
        ╰─$ ng generate component dataset-02/dashboard-water
        create src/app/dataset-02/dashboard-water/dashboard-water.component.css (0 bytes)
        create src/app/dataset-02/dashboard-water/dashboard-water.component.html (34 bytes)
        create src/app/dataset-02/dashboard-water/dashboard-water.component.spec.ts (685 bytes)
        create src/app/dataset-02/dashboard-water/dashboard-water.component.ts (304 bytes)
        update src/app/dataset-02/dataset-02.module.ts (506 bytes)

----------




----------




----------
TODO:

    Repasar Routes con Child...

    Fuentes:
    https://stackoverflow.com/questions/40132186/error-cannot-match-any-routes-url-segment
    https://plnkr.co/edit/JcMZSrYAH1WDnViP7Mxh?p=preview

    Otra:
    https://www.youtube.com/watch?v=Rhc3sOEhP4A
    MUY BUENO! Y SOBRE ANGULAR 5....
    CONTIENE SUB ROUTING.... Y un ejemplo Completo

Por ahora cierro el post aca ....  tengo el video de ejemplo