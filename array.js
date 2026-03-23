const arr=[23,56,2,7,8,2,33690,567]


const min=()=>{
    let minIndex=arr[0];
     for(let m of arr){
        if(m<minIndex){
            minIndex=m
        }
     }
     console.log(minIndex);
}
min();

const max=()=>{
    let maxIndex=arr[0];
     for(let m of arr){
        if(m>maxIndex){
            maxIndex=m
        }
     }
     console.log("-------------------------"+maxIndex);
}
max();

const unique=()=>{ 
   
     for(let i=0;i<arr.length;i++){
         let count=0;
        for(let j=i;j<arr.length;j++){
          
            if(arr[i]==arr[j]){
                count++;
            }
        }
      if(count>=2){
        arr.splice(i,1);
        console.log("-------------------"+arr[i])
      }
     }
     console.log(arr)
    
}
unique();