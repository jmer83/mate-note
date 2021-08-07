<?php
class Dapp {
	
	private $id;
	private $user;
	private $name;
	private $type;
	private $eth_account;
	private $key_eth_account;
	private $interface;
	private $added;
    private $network;
    private $address;

	public function getId(){
        return $this->id;
@@ -32,9 +33,13 @@ public function getKeyEthAccount(){
		return $this->key_eth_account;
	}

        public function getNetwork(){
		return $this->network;
    public function getNetwork(){
	    return $this->network;
	}

	public function getAddress(){
        return $this->address;
    }

	public function getInterface(){
		if ($this->interface) {
@@ -81,10 +86,32 @@ public function getInterface(){
						'cancel_buttons_color' => '#0579a2',
						'headers_color' => '#1fe284'
					);
                case 'custom-token':
                    return array(
                        'background_color' => '#00324e',
                        'text_color' => '#ffffff',
                        'links_color' => '#aaaaaa',
                        'eth_addresses_color' => '#1fe284',
                        'ok_buttons_color' => '#07c58e',
                        'cancel_buttons_color' => '#0579a2',
                        'headers_color' => '#1fe284'
                    );
				default:
					return false;
                    return array(
                        'background_color' => '#00324e',
                        'text_color' => '#ffffff',
                        'links_color' => '#aaaaaa',
                        'eth_addresses_color' => '#1fe284',
                        'ok_buttons_color' => '#07c58e',
                        'cancel_buttons_color' => '#0579a2',
                        'headers_color' => '#1fe284'
                    );
			}
		}
	}

    public function setType($type) {
        $this->type = $type;
    }

} 
