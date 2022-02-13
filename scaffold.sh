#!/usr/bin/env bash

source "bin/component.sh"

comp="-c"

if [ "$1" == "$comp" ]; then
component $2 $3
fi
