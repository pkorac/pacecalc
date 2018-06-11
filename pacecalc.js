

function toTotalSec( min, sec ){
	return (min * 60) + sec;
}

function toMinPerMile( totalsecKM ){
	return totalsecKM * 1.60934;
}

function toMinPerKM( totalPaceSecMile ){
	return totalPaceSecMile / 1.60934;
}


function paceMinutes( totalPaceSec ){
	return Math.floor( totalPaceSec / 60 );
}
function paceSeconds( totalPaceSec){
	var sec = Math.round( totalPaceSec % 60 );
	if ( sec < 10 ){
		sec = '0' + Math.round( totalPaceSec % 60 );
	}
	return sec;
}



var paceMin = 5;
var paceSec = 30;



if ( process.argv.length > 3 ){
	paceMin = parseInt( process.argv[2] );
	paceSec = parseInt( process.argv[3] );
}



var totalSec = toTotalSec( paceMin, paceSec );

var minPerMile = 'In min / mile: '
					+ paceMinutes( toMinPerMile( totalSec ) )
					+ ':'
					+ paceSeconds( toMinPerMile( totalSec ) );
console.log(minPerMile);

var minPerKM = 'In min / km: '
					+ paceMinutes( toMinPerKM( totalSec ) )
					+ ':'
					+ paceSeconds( toMinPerKM( totalSec ) );
console.log( minPerKM );