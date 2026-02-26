# vicard·
# update linux 
scp -r /home/fsm/git/vicard/* user01@192.168.100.5:~/vicard/

# Agregar Subdominio
sudo nano /etc/nginx/sites-available/000.vicard.cl

# Editar Subdominio
server {
    listen 80;
    server_name 000.vicard.cl;

    root /home/user01/vicard/id_000;
    index 000.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Logs específicos para este subdominio
    error_log /var/log/nginx/000_vicard.error.log;
}

# Activar y reiniciar
# Activar
sudo ln -s /etc/nginx/sites-available/rgr.vicard.cl /etc/nginx/sites-enabled/

# Probar y reiniciar
sudo nginx -t
sudo systemctl restart nginx

# Permisos
chmod -R 755 /home/user01/vicard/id_000

# certbot
sudo certbot --nginx -d 000.vicard.cl