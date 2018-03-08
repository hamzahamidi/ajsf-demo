#!/usr/bin/env bash

export YELLOW='\033[1;33m'
export RED='\033[1;31m'

printf "%bchange base URL of index.html \n" "${YELLOW}" 
sed -i -e 's/href="\/"/href=".\/"/g' dist/index.html
result=$?
if [ "${result}" != "0" ] ; then
	printf "\n%bERROR: changing base URL not achieved%b\n\n" "${RED}"
	exit 1
fi
printf "%bPrint index.html \n" "${YELLOW}" 
cat dist/index.html
