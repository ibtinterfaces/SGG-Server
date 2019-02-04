#!/bin/bash
cp data-server.service /etc/systemd/system/
systemctl enable data-server.service
systemctl start data-server.service
systemctl status data-server.service


