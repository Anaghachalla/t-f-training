/* You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). */

var matrix= [[10,11,12],[4,5,6],[7,8,9]];
var a=[];
var len = matrix.length;
for(var i=0; i<len; i++)
{
    var temp= [];
    for(var j=len-1; j>=0;j--)
    {
        temp.push(matrix[j][i]);
    }
    a.push(temp);
}

console.log(a);