const searchWord = (text, word) => {
        var x = 0, y=0;
        for (i=0;i< text.length;i++)
            {
            if(text[i] == word[0])
                {
                for(j=i;j< i+word.length;j++)
                   {
                    if(text[j]==word[j-i])
                      {
                        y++;
                      }
                    if (y==word.length){
                        x++;
                    }
                }
                y=0;
            }
        }
       return x;
    }
    
    let string = 'the bike is very nice. the car is very nice';
    search_string = 'the';
    console.log(searchWord(string, search_string));