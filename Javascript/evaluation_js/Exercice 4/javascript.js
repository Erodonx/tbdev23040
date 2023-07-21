var total,PU, QTECOM;
function calcul(pu,qtecom)
{
    var remise=1;
    var port;
    var totrem;
    var tot = pu*qtecom;

    if (tot >= 100 && tot <=200)
    {
        remise = 0.95;
    }else if(tot > 200)
    {
        remise = 0.9;
    }
    totrem = (qtecom * pu * remise);
    if (totrem > 500)
    {
        port = 0;
    } else {
        port = totrem*0.02;
        if (port < 6)
        {
            port = 6;
        }
    }
    tot = (totrem + port).toFixed(2);
    return tot;
}
PU=window.prompt('Saisir le prix unitaire');
QTECOM=window.prompt('Saisir la quantité commandée');
total=calcul(PU,QTECOM);
window.alert('le prix total est de : '+total);