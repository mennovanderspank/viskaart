# Import external modules
import os       # Operating system interface
import psycopg2 # PostgreSQL interface

#Print working directory
wd = os.getcwd()

# Navigate to directory and list content
os.chdir('database/data')

# Inladen CSV bestand
csv_file = open('Vangsten Regio Eindhoven - Den Bosch.csv','r')

# Openen database 
conn = psycopg2.connect("host=localhost dbname=engineer2021 user=postgres password=postgres port=5432")
cur = conn.cursor()

# Ophalen rijen
lines = csv_file.readlines()
# print (lines)

# Verwerk lijn voor lijn
line_nr = 0
line_inserted = 0
for line in lines :
    #print(line)
    if line_nr > 0 :

        # Selecteer kolommen
        kolom_waardes = line.split(';')
        #print(kolom_waardes)

        # Ophalen waardes uit line
        lat = kolom_waardes[3]
        lon = kolom_waardes[2]
        datum = kolom_waardes[0]
        tijd = kolom_waardes[1]
        vissoort = kolom_waardes[4].rstrip()

        # printen
        # print(datum)
        # print(tijd)
        print(vissoort)

#         # Opslaan in database
#         # execute the INSERT statement
        sql_insert = 'insert into visvangsten(datum, tijd, vissoort, locatie) values (%s, %s, %s, St_SetSRID(ST_makePoint(%s,%s),4326))'
        cur.execute(sql_insert, (datum, tijd, vissoort, lon, lat))
        
        line_inserted = line_inserted + 1

#     # Volgende rij
    line_nr = line_nr + 1

# # Commit
conn.commit()