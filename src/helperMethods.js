function rnd(i){
    for(var n=0,r=131,t=106,c=i>>24&255,f=i>>16&255,u=i>>8&255,s=255&i,l=0;l<32;l++)
    n+=2654435769,t=t+(((r=r+((t<<4)+c^t+(n&=4294967295)^(t>>5)+f)&65535)<<4)+u^r+n^(r>>5)+s)&65535;
    return(r<<8)+t
}
var i, ii, c, r, s="CDHS", v="23456789TJQKA", l=52;
function rst(){
    for(i in c=[],s.split(""))
    for(ii in v.split(""))c.push(v[ii]+s[i]);l=c.length
}
function shuffle(n){
    rst();
    var r=n;
    for(i in c)
    ii=c[i],
    r=rnd(r),
    c[i]=c[r%l],
    c[r%l]=ii
}
function dealhand(n,t,f){
    for(null==f&&(f=l),r=[],i=0;i<f;i++)i%t==n?r.push(c.shift()):c.shift();return r.sort(function(i,n){function r(i){return 13*s.indexOf(i[1])+v.indexOf(i[0])}return r(i)-r(n)})}
function dealcard(){return l--,c.shift()}
function dealtexas(i,n){return dealhand(i,n,2*n)}rst();