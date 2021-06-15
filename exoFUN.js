function myFunction(parametre_entree) {
    if (typeof(parametre_entree) == 'number') {
    return 0;
    
    }

    if (typeof(parametre_entree) == 'boolean'){
        return 0;
    }
      
    // so parametre_entree is a string
    r_list=[]; 
    j = 0;

    for(i=0;i<parametre_entree.length;i++){
        if (parametre_entree[i] == ' '){ 
            if (i != j){
    r_list.push(parametre_entree.substring(j, i));
    } 
    j = i+1;
      }
    }
    r_list.push(parametre_entree.substring(j, i));
    return r_list;
}

//To call the FUnction : 
myFunction();