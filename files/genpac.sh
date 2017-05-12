# @Author: mcxiaoke
# @Date:   2017-04-13 14:44:18
# @Last Modified by:   mcxiaoke
# @Last Modified time: 2017-04-13 14:56:14
# pip install gfwlist2pac
gfwlist2pac -i sites.txt -p "SOCKS5 127.0.0.1:1080;" -f ss.pac
gfwlist2pac -i sites.txt -p "PROXY 10.8.0.1:8118;DIRECT" -f db.pac
