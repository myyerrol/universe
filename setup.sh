#!/usr/bin/env bash

set -e

PATH_ROOT=${PWD}
PATH_RESS=${PATH_ROOT}/src/.vuepress/public/res/
PATH_NODE=${PATH_ROOT}/node_modules/
PROJ_NAME=${PATH_ROOT##*/}

if [ ! -d ${PATH_RESS}/.git ]; then
    echo ""
    echo "Downloading resources..."
    rm -rf ${PATH_RESS}
    git clone git@github.com:myyerrol/${PROJ_NAME}-resources.git ${PATH_RESS}
else
    echo ""
    echo "Updating resources..."
    cd ${PATH_RESS}
    git pull origin main
    cd ${PATH_ROOT}
fi

if [ ! -d ${PATH_NODE} ]; then
    echo ""
    echo "Downloading Node.js packages..."
    pnpm install
else
    echo ""
    echo -n "Do you want to update Node.js packages? [Y/n]: "
    read choice
    if [ ${choice} == "Y" ]; then
        pnpm install
    fi
    echo "Already up to date."
fi
