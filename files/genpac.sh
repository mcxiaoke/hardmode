# @Author: mcxiaoke
# @Date:   2017-04-13 14:44:18
# @Last Modified by:   mcxiaoke
# @Last Modified time: 2017-04-13 14:56:14
# pip install gfwlist2pac
cat raw.txt | sort -u > sites.txt
sed -i "" "/^[[:space:]]*$/d" sites.txt
sed -e 's/^/||/' sites.txt > list.txt
gfwlist2pac -i sites.txt -p "SOCKS5 127.0.0.1:2080;" -f ss.pac
rm raw.txt
cp sites.txt raw.txt
