<?php

class ConfigurationsController extends AppController {

	public function indexAction() {

		$this->get('header')->setText('Configurations');

		$list = new jQueryMobile\ListView();
		$list->set('data_inset', true);
		$list->addClass('ui-listview ui-listview-inset ui-corner-all ui-shadow');


		$prototype = new jQueryMobile\ListItem();
		$prototype->setView(VIEWS_DIR."/configurations/list_item.html.php");
		$prototype->set('heading',true);

		$links = option('setup_configuration_links');

		foreach ($links as $type=>$link) {
			$list_item = clone $prototype;
			$list_item->set('text', $link['text']);

			// uncomment to allow rss feed displayed in this app
			$url = url_for(array('ConfigurationsController', 'show')).$type;
			//$url = $link['url'];
			$list_item->set('url', $url);

			$list_item->set('type', $type);
			$list->addListItem($list_item);
		}

		$this->set('list', $list);
		$this->set("content", $this->render("configurations/index.html.php",false));

	}

	public function showAction() {
		$type = '';
		$type = params('type');
		$links = option('setup_configuration_links');
		$this->get('header')->setText($links[$type]['text']);

		$list = new jQueryMobile\ListView();
		$list->set('filter',true);
		$list->addClass('free_pcs');

		$prototype = new jQueryMobile\ListItem();
		$prototype->setView(VIEWS_DIR."/configurations/show_item.html.php");
		$prototype->set('heading',true);

		$rss = find_rss($links[$type]['url']);
		if ($rss) {
			foreach ($rss->channel->item as $item) {
				// needed to get the content:encoded tag because of the namespace
				$description = $item->children('http://purl.org/rss/1.0/modules/content/');
				// hack to get rid of the 'report post' link
				$description = preg_replace("/\<p align=\"right\"\>.+\<\/p\>/", "", $description);

				$list_section = new jQueryMobile\ListSection();
				$list_section->set('text',"{$item->title}");
				$list->addListSection($list_section);

				$list_item = clone $prototype;
				$list_item->set('description',"{$description}");
				$list_section->addListItem($list_item);

			}
			$this->set('content',$list);
		}
		else {
			$this->set("content", $this->render("configurations/error.html.php",false));
		}




	}

}