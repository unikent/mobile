<?php

use Behat\Mink\Exception\ElementNotFoundException;

$steps->Given('/^(?:|I )am on (?P<page>.+)$/', function($world, $page) {
    $world->getSession()->visit($world->getPathTo($page));
});

$steps->When('/^(?:|I )go to (?P<page>.+)$/', function($world, $page) {
    $world->getSession()->visit($world->getPathTo($page));
});

$steps->When('/^(?:|I )press "(?P<button>[^"]*)"$/', function($world, $button) {
    $world->getSession()->getPage()->clickButton($button);
});

$steps->When('/^(?:|I )follow "(?P<link>[^"]*)"$/', function($world, $link) {
    $world->getSession()->getPage()->clickLink($link);
});

$steps->When('/^(?:|I )fill in "(?P<field>[^"]*)" with "(?P<value>[^"]*)"$/', function($world, $field, $value) {
    $world->getSession()->getPage()->fillField($field, $value);
});

$steps->When('/^(?:|I )fill in "(?P<value>[^"]*)" for "(?P<field>[^"]*)"$/', function($world, $field, $value) {
    $world->getSession()->getPage()->fillField($field, $value);
});

$steps->When('/^(?:|I )fill in the following:$/', function($world, $fieldsTable) {
    $page = $world->getSession()->getPage();
    foreach ($fieldsTable->getRowsHash() as $field => $value) {
        if ($page->findField($field) && $page->findField($field)->getTagName() == 'select') {
            $world->getSession()->getPage()->selectFieldOption($field, $value);
        } else {
            $page->fillField($field, $value);
        }
    }
});

$steps->When('/^(?:|I )select "(?P<option>[^"]*)" from "(?P<select>[^"]*)"$/', function($world, $select, $option) {
    $world->getSession()->getPage()->selectFieldOption($select, $option);
});

$steps->When('/^(?:|I )check "(?P<option>[^"]*)"$/', function($world, $option) {
    $world->getSession()->getPage()->checkField($option);
});

$steps->When('/^(?:|I )uncheck "(?P<option>[^"]*)"$/', function($world, $option) {
    $world->getSession()->getPage()->uncheckField($option);
});

$steps->When('/^(?:|I )attach the file "(?P<path>[^"]*)" to "(?P<field>[^"]*)"$/', function($world, $field, $path) {
    $world->getSession()->getPage()->attachFileToField($field, $path);
});

$steps->Then('/^(?:|I )should see "(?P<text>[^"]*+)"$/', function($world, $text) { 
    try {
        @assertRegExp($text, strip_tags($world->getSession()->getPage()->getContent()));
    } catch (Exception $e) {
        assertRegExp('/'.preg_quote($text,"/").'/', strip_tags($world->getSession()->getPage()->getContent()));
    }
});

$steps->Then('/^(?:|I )should not see "(?P<text>[^"]*+)"$/', function($world, $text) {
    assertRegExp('/(?!'.preg_quote($text,"/").')/', strip_tags($world->getSession()->getPage()->getContent()));
});

$steps->Then('/^(?:I )should see a link to "(?P<path>[^"]*+)" with text "(?P<text>[^"]*+)"$/', function($world, $path, $text) {
    assertTrue(null !== $world->getSession()->getPage()->find('css',"a[href='".$world->getPathTo($path)."']:contains('$text')"));
});

$steps->Then('/^(?:|there )should be "(?P<selector>[^"]*+)"$/', function($world, $selector) {
    assertTrue(null !== $world->getSession()->getPage()->find('css',$selector));
});

$steps->Then('/^(?:|there )should not be "(?P<selector>[^"]*+)"$/', function($world, $selector) {
    assertFalse(null !== $world->getSession()->getPage()->find('css',$selector));
});

$steps->Then('/^the "(?P<field>[^"]*)" field should contain "(?P<value>[^"]*)"$/', function($world, $field, $value) {
    $node = $world->getSession()->getPage()->findField($field);

    if (null === $node) {
        throw new ElementNotFoundException('field', $field);
    }
    if ($value=="" && $node->getValue()=="") {
        assertTrue(true);
    } else {
        assertContains($value, $node->getValue());
    }
});

$steps->Then('/^the "(?P<field>[^"]*)" field should not contain "(?P<value>[^"]*)"$/', function($world, $field, $value) {
    $node = $world->getSession()->getPage()->findField($field);

    if (null === $field) {
        throw new ElementNotFoundException('field', $field);
    }

    assertNotContains($value, $node->getValue());
});

$steps->Then('/^the "(?P<checkbox>[^"]*)" checkbox should be checked$/', function($world, $checkbox) {
    $field = $world->getSession()->getPage()->findField($checkbox);

    if (null === $field) {
        throw new ElementNotFoundException('field', $checkbox);
    }

    assertTrue($field->isChecked());
});

$steps->Then('/^the "(?P<checkbox>[^"]*)" checkbox should not be checked$/', function($world, $checkbox) {
    $field = $world->getSession()->getPage()->findField($checkbox);

    if (null === $field) {
        throw new ElementNotFoundException('field', $checkbox);
    }

    assertFalse($field->isChecked());
});

$steps->Then('/^(?:|I )should be on (?P<page>.+)$/', function($world, $page) {
    try {
        @assertRegExp(
            parse_url($world->getPathTo($page), PHP_URL_PATH),
            parse_url($world->getSession()->getCurrentUrl(), PHP_URL_PATH)
        );
    } catch (Exception $e) {
        assertEquals(
            parse_url($world->getPathTo($page), PHP_URL_PATH),
            parse_url($world->getSession()->getCurrentUrl(), PHP_URL_PATH)
        );
    }
});

$steps->Then('/^(?:|I )should not be on (?P<page>.+)$/', function($world, $page) {
    assertNotEquals(
        parse_url($world->getPathTo($page), PHP_URL_PATH),
        parse_url($world->getSession()->getCurrentUrl(), PHP_URL_PATH)
    );
});

$steps->When('/^I wait (\d+)$/', function($world, $time) {
  sleep($time);
});

