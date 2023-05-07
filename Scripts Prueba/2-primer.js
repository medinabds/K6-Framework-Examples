import http from 'k6/http';
import { check, group, sleep } from 'k6';

export default function() {
http.get('https://test.k6.io/');
};