#!/bin/zsh

# Directory met bestanden
DIR="./public"

# Loop door alle bestanden in de directory
for file in "$DIR"/*; do
    # Controleer of het een bestand is
    if [ -f "$file" ]; then
        # Haal de bestandsnaam zonder pad op
        filename=$(basename "$file")
        
        # Haal de eerste 6 tekens van de bestandsnaam
        newname="${filename:0:6}"

        # Voeg de extensie .jpg toe
        mv "$file" "$DIR/${newname}.jpg"
    fi
done
