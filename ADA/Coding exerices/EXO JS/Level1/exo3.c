#include <stdio.h>
#include <stdlib.h>
int main()
{
    
    
    int goodNumber = rand()%9;
    int playerNumber;
    printf("Enter an integer: ");
    scanf("%d", &playerNumber);
    
    do{
        if(goodNumber == playerNumber){
            printf("You did it! you found the correct number ! ");
        }
        if(goodNumber>playerNumber){
            printf("Step up your game it's higher ");
            scanf("%d", &playerNumber);        
        }
        else if(goodNumber<playerNumber){
            printf("Duh it's lower ");
            scanf("%d", &playerNumber);
        }
        else{
            scanf("%d", &playerNumber);
        }
    }
    while(playerNumber != goodNumber);
    printf("You did it !");
    return 0;
}

