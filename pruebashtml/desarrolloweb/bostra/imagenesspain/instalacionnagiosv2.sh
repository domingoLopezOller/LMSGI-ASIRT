#--------------------------------------------------------------------------------------
#               Instalacionnagiosv2.sh
#
#Objetivo: Instalar el producto Nagios con todo el software necesario para su funcionamiento
#Requisitos: Necesita ejecutarse con permisos elevados.
#Consideraciones: 
#       - En la instalación se establecerá el usuario nagiosadmin, se debe recordar esta contraseña para acceder

echo "---------------------------------------------------"
echo "Actualizando....."
echo "---------------------------------------------------"
apt-get update -y

echo "---------------------------------------------------"
echo "Instalando las dependencias necesarias....."
echo "---------------------------------------------------"
apt-get install wget unzip vim curl openssl build-essential libgd-dev libssl-dev libapache2-mod-php php-gd php apache2 -y

echo "---------------------------------------------------"
echo "Descargando Nagios core 4.4.9....."
echo "---------------------------------------------------"
mkdir /tmp/nagios_install
cd  /tmp/nagios_install
wget https://assets.nagios.com/downloads/nagioscore/releases/nagios-4.4.9.tar.gz

echo "---------------------------------------------------"
echo "Descomprimiendo Nagios core 4.4.9....."
echo "---------------------------------------------------"
tar -xvzf nagios-4.4.9.tar.gz

echo "---------------------------------------------------"
echo "Instalando Nagios core 4.4.9....."
echo "---------------------------------------------------"
cd nagios-4.4.9
./configure --with-httpd-conf=/etc/apache2/sites-enabled
make all
make install-groups-users
usermod -a -G nagios www-data
make install
make install-daemoninit
make install-commandmode
make install-config
make install-webconf
a2enmod rewrite cgi
systemctl restart apache2
make install-exfoliation

echo "---------------------------------------------------"
echo "Estableciendo contraseña para el usuario nagiosadmin (usuario de acceso)....."
echo "---------------------------------------------------"
htpasswd -c /usr/local/nagios/etc/htpasswd.users nagiosadmin


echo "---------------------------------------------------"
echo "Descargando plugins de Nagios....."
echo "---------------------------------------------------"
wget https://nagios-plugins.org/download/nagios-plugins-2.4.4.tar.gz 

echo "---------------------------------------------------"
echo "Descomprimiendo plugins de Nagios....."
echo "---------------------------------------------------"
tar -xvzf nagios-plugins-2.4.4.tar.gz

echo "---------------------------------------------------"
echo "Instalando plugins de Nagios....."
echo "---------------------------------------------------"
cd nagios-plugins-2.4.4
./configure --with-nagios-user=nagios --with-nagios-group=nagios
make
make install
/usr/local/nagios/bin/nagios -v /usr/local/nagios/etc/nagios.cfg
rm -r /tmp/nagios_install
echo "---------------------------------------------------"
echo "Iniciamos servicio de Nagios....."
echo "---------------------------------------------------"
systemctl start nagios
systemctl enable nagios
systemctl status nagios

